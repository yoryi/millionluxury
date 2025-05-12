import React, { Component, ReactNode, RefObject } from "react";
import BottomSheet, { type BottomSheetModal, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { StyleSheet, ViewStyle } from "react-native";

/**
 * A reusable Bottom Sheet modal component using @gorhom/bottom-sheet (OOP version).
 *
 * @component
 * @param {RefObject<BottomSheetModal | null>} bottomSheetModalRef - Reference to control the modal (open/close).
 * @param {string[]} snapPoints - Snap positions for the modal (e.g., ["25%", "50%"]).
 * @param {ViewStyle} [modalContainerStyle] - Optional style for the modal container.
 * @param {ViewStyle} [backgroundStyle] - Optional style for the modal background.
 * @param {React.ReactNode} children - Content to be rendered inside the modal.
 * @param {function} [onClose] - Optional callback when the modal is closed.
 *
 * @example
 * ```tsx
 * <Modal snapPoints={["40%"]} bottomSheetModalRef={bottomSheetModalRef}>
 *   <Text>Contenido</Text>
 * </Modal>
 * ```
 */


interface ModalProps {
  bottomSheetModalRef: RefObject<BottomSheetModal | null>;
  snapPoints: string[];
  backgroundStyle?: ViewStyle;
  modalContainerStyle?: ViewStyle;
  children: ReactNode;
  headers?: ReactNode;
  onClose?: () => void;
}

class Modal extends Component<ModalProps> {
  static defaultProps = {
    onClose: () => { },
  };

  render() {
    const {
      bottomSheetModalRef,
      snapPoints,
      modalContainerStyle,
      backgroundStyle,
      children,
      headers,
      onClose = () => { },
    } = this.props;

    return (
      <BottomSheet
        onClose={onClose}
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
        enablePanDownToClose={true}
        enableDynamicSizing={false}
        backgroundStyle={backgroundStyle}
      >
        <BottomSheetView style={styles.headerContainer}>{headers}</BottomSheetView>
        <BottomSheetScrollView style={[styles.modalContainer, modalContainerStyle]}>
          {children}
        </BottomSheetScrollView>
      </BottomSheet>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
});

export default Modal;
