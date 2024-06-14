import React, {FunctionComponent} from 'react';
import css from './style.module.css';

interface PayloadItem {
    name: string;
    value: number;
    color: string;
}

interface Props {
    active?: boolean;
    payload?: PayloadItem[];
    label?: string;
}

export const CustomTooltip: FunctionComponent<Props> = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div className={css.wrapper}>
                <p className="label">{`Date : ${label}`}</p>
                {payload.map((item, index) => (
                    <p key={index} style={{color: item.color}}>
                        {`${item.name} : ${item.value}`}
                    </p>
                ))}
                <p>[x] It&apos;s easy to customize so we can add pretty much anything.</p>
            </div>
        );
    }

    return null;
};
