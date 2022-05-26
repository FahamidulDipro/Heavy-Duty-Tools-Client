
import { useQuery } from 'react-query';

const useTools = () => {
    const {
        data: tools,
        isLoading,
        refetch,
      } = useQuery("toolsData", () =>
        fetch("https://rocky-sierra-92602.herokuapp.com/tools").then((res) => res.json())
      );
    return [tools,isLoading,refetch]
};

export default useTools;