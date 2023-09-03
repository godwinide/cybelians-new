import React, { useRef, useState } from 'react'
import {
    Button, Input,
    FormGroup,
    Label,
} from 'reactstrap'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom';

function Register() {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const formRef = useRef(null);
    const history = useHistory();

    const handleFrontImageChange = (e) => {
        const file = e.target.files[0];
        setFrontImage(file);
    };

    const handleBackImageChange = (e) => {
        const file = e.target.files[0];
        setBackImage(file);
    };

    const alert = useAlert()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (frontImage && backImage) {
            alert.show("Registration successful");
            formRef.current.reset();
            history.push('/');
        } else {
            alert.error('Please select both front and back images.');
        }
    };

    return (
        <div className='register container'>
            <h2>Join The Cybelians</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Input
                    placeholder='Firstname'
                    required
                />
                <Input
                    placeholder='Lastname'
                    required
                />
                <Input
                    placeholder='Age'
                    type='number'
                    required
                />
                <Input
                    placeholder='E-mail'
                    type='email'
                    required
                />
                <Input
                    placeholder='Gender M/F/TG'
                    type='text'
                />
                <select class="form-select" aria-label="Default select example">
                    <option selected>Marriage Type</option>
                    <option>Loving relationship</option>
                    <option>Cuckolding relationship (Non-Loving)</option>
                </select>
                <br />
                <Input
                    placeholder='Town'
                    type='text'
                />
                <Input
                    placeholder='Home Address'
                    type='text'
                />
                <Input
                    placeholder='City'
                    type='text'
                />
                <Input
                    placeholder='Country'
                    type='text'
                />
                <Input
                    placeholder='Referral Name'
                    type='text'
                />
                <Input
                    placeholder='Address'
                    type='text'
                />
                <Input
                    placeholder='Phone number'
                    type='text'
                />
                <FormGroup>
                    <Label class='text-white' for="frontImage">Front Image of a valid ID</Label>
                    <Input
                        type="file"
                        name="frontImage"
                        id="frontImage"
                        accept="image/*"
                        onChange={handleFrontImageChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label class='text-white' for="backImage">Back Image of a valid ID</Label>
                    <Input
                        type="file"
                        name="backImage"
                        id="backImage"
                        accept="image/*"
                        onChange={handleBackImageChange}
                    />
                </FormGroup>
                <Button
                    color='primary'
                >Join</Button>
            </form>

        </div>
    )
}

export default Register