import {addParameters, addDecorator} from '@storybook/react'
import {withContexts} from '@storybook/addon-contexts/react'
import {contexts} from './context'
import {withKnobs} from '@storybook/addon-knobs'


addParameters({background: [{name:"Default Theme", value: "#050449", default: true} ]})


// addDecorator(withContexts(contexts))

addDecorator(withKnobs)