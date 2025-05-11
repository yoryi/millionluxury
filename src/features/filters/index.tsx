import React, { useState } from 'react';
import { Colors } from '../../config';
import WalletList from '../walletList';
import { InputRN, Modal } from '../../components';

interface FilterModalProps {
    isFilterOpen: boolean;
    bottomSheetModalRef: React.RefObject<any>;
}

const Filter: React.FC<FilterModalProps> = ({
    isFilterOpen,
    bottomSheetModalRef
}) => {
    const [inputSearch, setInputSearch] = useState("");
    return (
        isFilterOpen && (
            <Modal
                snapPoints={["85%"]}
                bottomSheetModalRef={bottomSheetModalRef}
                onClose={() => bottomSheetModalRef.current?.close()}
                backgroundStyle={{ backgroundColor: Colors.background }}
                modalContainerStyle={{ backgroundColor: Colors.background }}>
                <InputRN
                    value={inputSearch}
                    iconLeft={'magnify'}
                    placeholder={'Search'}
                    onChangeText={setInputSearch}
                    onClear={() => setInputSearch('')}
                    style={{ color: Colors.secondary }}
                    placeholderTextColor={Colors.textSecondary}
                    containerStyle={{ backgroundColor: Colors.background50 }}
                />
                <WalletList type={'moneda'} />
            </Modal>
        )
    );
};

export default Filter;