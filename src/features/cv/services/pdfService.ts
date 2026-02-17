
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generateCV = async (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            onclone: (clonedDoc) => {
                // SURGICAL FIX FOR OKLCH ERROR
                // html2canvas fails when it parses ANY style tag containing 'oklch'

                // 1. Scrub oklch from all style tags in the cloned document
                const styles = clonedDoc.getElementsByTagName('style');
                for (let i = 0; i < styles.length; i++) {
                    const styleTag = styles[i];
                    if (styleTag.innerHTML.includes('oklch')) {
                        // Replace ALL oklch function calls with a safe hex color
                        // This prevents html2canvas from crashing during CSS parsing
                        styleTag.innerHTML = styleTag.innerHTML.replace(/oklch\([^)]+\)/g, '#7c3aed');
                    }
                }

                // 2. Also scrub from any inline styles or variables
                const allElements = clonedDoc.getElementsByTagName('*');
                for (let i = 0; i < allElements.length; i++) {
                    const el = allElements[i] as HTMLElement;
                    if (el.style) {
                        // Check common properties
                        ['color', 'backgroundColor', 'borderColor', 'fill', 'stroke'].forEach(prop => {
                            // @ts-ignore
                            if (el.style[prop]?.includes('oklch')) {
                                // @ts-ignore
                                el.style[prop] = '#111827';
                            }
                        });
                    }
                }

                // 3. Ensure target visibility
                const target = clonedDoc.getElementById(elementId);
                if (target) {
                    target.style.display = 'block';
                    target.style.position = 'static';
                    target.style.transform = 'none';
                    target.style.margin = '0 auto';
                }
            }
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Rabin_Glan_CV.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};
