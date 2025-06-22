import React from "react";

interface CartIconProps extends React.SVGProps<SVGSVGElement> {
    children?: React.ReactNode;
}

const CartIcon: React.FC<CartIconProps> = ({children, ...props}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            {...props}
        >
            {children}
        </svg>
    );
};

export default CartIcon;