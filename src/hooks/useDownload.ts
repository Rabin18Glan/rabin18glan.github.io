import { useCallback } from 'react';

const useDownload = () => {
  function downloadFile(path:string)
  {
   return useCallback(() => {
        const link = document.createElement('a');
        link.href = path;
        link.download = path.split('/').pop() || 'download'; // Extract filename from path
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, [path]);
  }

  return downloadFile;
};

export default useDownload;
