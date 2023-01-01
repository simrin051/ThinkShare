import { FormControl ,FormLabel,Input} from "@chakra-ui/react"

export const TextField = ({label, placeholder, type, onChange, onFocus,value}) => {
return (<FormControl>
  <FormLabel>{label}</FormLabel>
  <Input placeholder={placeholder} type={type} onChange={onChange} onFocus={onFocus} value={value}/>
</FormControl>
)
}