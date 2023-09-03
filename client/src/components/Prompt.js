import React, { useState } from 'react'
import { Button, Form, Input } from 'reactstrap'
import { useAlert } from 'react-alert'


function Prompt({ setOpen }) {
    const alert = useAlert()
    const [code, setCode] = useState('');
    const code1 = 'MONALISA';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (code.trim().toUpperCase() === code1) {
            setOpen(true);
        } else {
            alert.error('Invalid Referral Code');
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