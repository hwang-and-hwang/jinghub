import { createContext, Dispatch, FC, useState } from 'react';
import { JingShower } from '../../types';

type DetailData = {
    showing: boolean;
    item?: JingShower;
}

export const Context = createContext<{
    detailData: DetailData;
    setDetailData?: Dispatch<DetailData>
}>({
    detailData: {
        showing: false,
    }
});

export const DetailContext: FC = ({ children }) => {
    const [detailData, setDetailData] = useState<DetailData>({
        showing: false,
    });

    return (
        <Context.Provider value={{ detailData, setDetailData }}>
            {children}
        </Context.Provider>
    )
}
