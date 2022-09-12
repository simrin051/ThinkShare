import { Dialog, TextField } from "@mui/material"

export const LoginDialog = () => {
return(
    <Dialog>
<TextField
autoFocus
type="email"
name="email"
label="Email Address"
/> </Dialog>)
}