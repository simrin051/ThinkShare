import { FormControl ,FormLabel,Input} from "@chakra-ui/react"

export const TextField = ({label, placeholder, type}) => {
return (<FormControl>
  <FormLabel>{label}</FormLabel>
  <Input placeholder={placeholder} type={type}/>
</FormControl>
)
}