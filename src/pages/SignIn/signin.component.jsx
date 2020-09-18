import React from 'react';
import './signin.styles.scss';
import { Row, Col, Card, Divider, Button, Form} from 'antd';

function SignIn(){
    return (
        <div className='sign-in'>
            <Card className='container' bordered={false}>
                <h1 className='title'>Yddragsil</h1>
                <Divider />
                <Form className='form' layout='vertical'>
                    <Form.Item>
                        <Button> Sign in with Google</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default SignIn;