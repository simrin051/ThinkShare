import { FormControl ,FormLabel,Input} from "@chakra-ui/react"
import '../../index.css';
export const ErrorTextField = ({text}) => {
return (<small class="error-text"><i class="fa fa-exclamation mr-2" aria-hidden="true"></i>
{text}</small>);
}