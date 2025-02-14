export default interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
    label?: string,
    error?: boolean,
    message?: string,
}