import React from 'react'
import Grandchild from './Grandchild'

export default function Child() {
    return (
        <main role='main' className='Child'>
            <Grandchild />
        </main>
    );
}