import React from 'react';
import {Field, Form, Formik} from 'formik';

function SearchBox(){
    return(
        <>

            <Formik>
                <Form className='mt-12'>
                    <Field type='text' placeholder="Search" className="border-2 border-black w-full h-5/6 p-3 text-4xl text-center"/>
                </Form>
            </Formik>


        </>

    );
}


export default SearchBox;