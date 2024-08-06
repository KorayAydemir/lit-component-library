
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {HelloText as HelloTextElement} from 'lit-component-library/src/components/hello-text/index.js';
 
 
 

 
 export const HelloText = createComponent({
   react: React,
   tagName: 'hello-text',
   elementClass: HelloTextElement,
   events: {
     
   }
  });
 
 