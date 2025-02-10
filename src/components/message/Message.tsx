import { FC } from "react";
import { TMessageProps } from "./Message.types";

export const Message: FC<TMessageProps> = ({ message }) => <div>{message}</div>
