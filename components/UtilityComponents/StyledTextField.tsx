import { TextField, TextFieldProps } from '@mui/material'

const StyledTextField = (props: TextFieldProps) => {
    return (
        <TextField
            variant="standard"
            sx={{
                height: '100%',
                width: '100%',
                borderRadius: 1
            }}
            InputProps={{
                sx: { borderRadius: 0, height: '100%', width: '100%', paddingTop: 1, paddingLeft: 3 },
                disableUnderline: true
            }}
            InputLabelProps={{
                shrink: false,
                sx: {
                    top: -15,
                    left: 10,
                    fontWeight: '500',
                    '&.Mui-focused': {
                        color: '#000'
                    }
                },
                variant: 'standard'
            }}
            {...props}
        />
    )
}

export default StyledTextField
