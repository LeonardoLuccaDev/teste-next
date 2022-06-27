import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";


interface ILoadingProps{
  size?: number
}

export const Loading = ({size = 10}: ILoadingProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#D9D9D9");

  return (
    <div className="h-full w-full flex items-center justify-center">
        <PropagateLoader color={color} loading={loading} size={size} />
    </div>
  );
}