import * as React from 'react';
import { Text } from 'react-native';
import { StyleManager } from '../../Styles/StyleManager';
import { DebugOutputFactory } from '../Factories/DebugOutputFactory';
export class TextBlockView extends React.Component {
    render() {
        const { model, theme } = this.props;
        if (!model || !model.isSchemaCheckPassed) {
            return DebugOutputFactory.createDebugOutputBanner(model.type + '>>' + model.text + ' is not valid', theme, 'error');
        }
        return (React.createElement(Text, { accessible: true, style: {
                color: StyleManager.getColor(model.color, this.props.theme, model.isSubtle),
                fontSize: StyleManager.getFontSize(model.size),
                fontWeight: StyleManager.getFontWeight(model.weight),
                backgroundColor: 'transparent',
                textAlign: StyleManager.getTextAlign(model.horizontalAlignment),
                flexWrap: StyleManager.getWrap(model.wrap),
                marginTop: this.spacing
            }, numberOfLines: model.maxLines }, model.text));
    }
    get spacing() {
        if (this.props.index !== undefined && this.props.index > 0) {
            return StyleManager.getSpacing(this.props.model.spacing);
        }
        return StyleManager.getSpacing('default');
    }
}
