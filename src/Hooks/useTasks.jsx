import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";



const useTasks = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
    const {data: tasks = [], isPending: loading, refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`);
            return res.data;
        }
        
      })
  
      return [tasks, loading, refetch];
};

export default useTasks;