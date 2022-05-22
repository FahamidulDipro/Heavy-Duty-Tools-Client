
import { useQuery } from 'react-query';

const useTools = () => {
    const {
        data: tools,
        isLoading,
        refetch,
      } = useQuery("toolsData", () =>
        fetch("http://localhost:5000/tools").then((res) => res.json())
      );
    return [tools,isLoading,refetch]
};

export default useTools;