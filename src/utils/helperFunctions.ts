import { format } from "date-fns";

export function timestampPtzToNoteCard(dateTime: string):string{
    const formattedDate= format(dateTime, "dd/MM/yyyy HH:mm:ss")

    console.log(formattedDate);
    return formattedDate;
}