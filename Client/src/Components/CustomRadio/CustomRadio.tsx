import React from 'react';
import { Button } from '@chakra-ui/core';

type Props = {
    isChecked?: boolean;
    isDisabled?: boolean;
    value: string;
    children: React.ReactNode;
};

const CustomRadio: React.FC<Props> = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            ref={ref}
            variantColor={isChecked ? 'yellow' : 'gray'}
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        />
    );
});

export default CustomRadio;
