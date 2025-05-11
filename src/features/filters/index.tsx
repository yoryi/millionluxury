import React, { Component, createRef } from 'react';
import { Colors } from '../../config';
import WalletList from '../walletList';
import { InputRN, Modal } from '../../components';
import { StateType } from '../../components/switch';

/**
 * Filter component provides a modal with a search input and displays a list of wallets.
 * 
 * This component uses the WalletList to display wallets based on the specified type ('moneda' or 'exchange').
 * The search input allows filtering wallets by name or title, and the modal can be closed programmatically.
 * 
 * @component
 * @example
 * ```tsx
 * <Filter type="moneda" isFilterOpen={true} bottomSheetModalRef={modalRef} />  // Displays a modal with wallet list of type 'moneda'
 * <Filter type="exchange" isFilterOpen={false} bottomSheetModalRef={modalRef} /> // Modal closed, does not display anything
 * ```
 * 
 * @param {Object} props - The properties for the component.
 * @param {StateType} props.type - The type of data to display in the wallet list (either 'moneda' or 'exchange').
 * @param {boolean} props.isFilterOpen - Determines if the modal is open.
 * @param {React.RefObject<any>} props.bottomSheetModalRef - Reference to the bottom sheet modal for programmatic control.
 */

interface FilterModalProps {
    type: StateType;
    isFilterOpen: boolean;
    bottomSheetModalRef: React.RefObject<any>;
}

interface FilterState {
    inputSearch: string;
}

class Filter extends Component<FilterModalProps, FilterState> {
    constructor(props: FilterModalProps) {
        super(props);
        this.state = {
            inputSearch: ""
        };
    }

    handleInputChange = (text: string) => {
        this.setState({ inputSearch: text });
    };

    clearInput = () => {
        this.setState({ inputSearch: "" });
    };

    closeModal = () => {
        this.props.bottomSheetModalRef.current?.close();
    };

    render() {
        const { isFilterOpen, type, bottomSheetModalRef } = this.props;
        const { inputSearch } = this.state;

        return (
            isFilterOpen && (
                <Modal
                    snapPoints={["85%"]}
                    bottomSheetModalRef={bottomSheetModalRef}
                    onClose={this.closeModal}
                    backgroundStyle={{ backgroundColor: Colors.background }}
                    modalContainerStyle={{ backgroundColor: Colors.background }}>
                    <InputRN
                        value={inputSearch}
                        iconLeft={'magnify'}
                        placeholder={'Search'}
                        onChangeText={this.handleInputChange}
                        onClear={this.clearInput}
                        style={{ color: Colors.secondary }}
                        placeholderTextColor={Colors.textSecondary}
                        containerStyle={{ backgroundColor: Colors.background50 }}
                    />
                    <WalletList type={type} searchQuery={inputSearch} />
                </Modal>
            )
        );
    }
}

export default Filter;