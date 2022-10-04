import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"

export const CircularProgressWithLabel = ({ value }) => {
    return (
        <div class="circularprogresswithlabel">
            <CircularProgress value={value} color='orange.400'>
                <CircularProgressLabel>{value}</CircularProgressLabel>
            </CircularProgress>
        </div>
    )
}