import React, { useState } from 'react'
import { Button, Form, Input } from 'reactstrap'
import { useAlert } from 'react-alert'


function Prompt({ setOpen }) {
    const alert = useAlert()
    const [code, setCode] = useState('');
    const code1 = 'BRX152Y';
    const code2 = 'DG9C38Q'

    const handleSubmit = (e) => {
        e.preventDefault();

        if (code.trim().toUpperCase() === code1 || code.trim().toUpperCase() === code2) {
            setOpen(true);
        } else {
            alert.error('Invalid Code');
        }
    };

    return (
        <div className='access'>
            <div className='container'>
                <h1>Enter Referral Code To Gain Access</h1>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder='Enter Referral Code'
                        required
                        value={code}
                        onInput={e => setCode(e.target.value)}
                    />
                    <Button
                        color='primary'
                    >Access</Button>
                </Form>
            </div>
        </div>
    )
}

export default Prompt