import React from 'react';
import { Card, CardBody} from 'reactstrap';

function Header({name,title}){
    return (
        <div className='text-center'>
            <Card className='my1' color="warning">
                <CardBody>
                <h1>This is title {title}</h1>
                </CardBody>
            </Card>
            
          
        </div>
    );
}

export default Header;