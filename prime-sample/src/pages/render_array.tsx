import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Card} from 'primereact/card';

export function RenderArray(){
    const arr:Array<string> = ['a','b','c','d','e'];
    const drawCard = (element: string) => {
        return (
            <Card style={{width:'25rem',marginBottom:'2em'}}>{element}</Card>
        );
    }
    return (
    <div>
        {arr.map((e)=>(drawCard(e)))}
    </div>
    );
}