import { Button } from "@mui/material"

interface Ibutton {
    text: string,
    onClick?: () => void;
    type: string
    width: string
}

export const MyButton = ({text, type, onClick, width}: Ibutton) =>{
    return (
        <Button 
            sx={{
                backgroundColor: type === 'secondary' ? '#0AB2B7' : '#000000',
                borderRadius: '40px',
                color: '#ffff',
                width: width,
                paddingY: '0.8rem'
            }}
            onClick={onClick}  
          >
            {text}
        </Button>
    )
}