import BottomSheet, { type BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import type React from "react";
import type { RefObject } from "react";
import { StyleSheet, ViewStyle } from "react-native";

/**
 * A reusable Bottom Sheet modal component using @gorhom/bottom-sheet.
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
 * <SheetModal snapPoints={["40%"]} bottomSheetModalRef={bottomSheetModalRef}>
 *   <Text>Contenido</Text>
 * </SheetModal>
 * ```
 */

type Props = {
  bottomSheetModalRef: RefObject<BottomSheetModal | null>;
  snapPoints: string[];
  backgroundStyle?: ViewStyle;
  modalContainerStyle?: ViewStyle;
  children: React.ReactNode;
  onClose?: () => void;
};

const Modal = ({
  bottomSheetModalRef,
  snapPoints,
  modalContainerStyle,
  backgroundStyle,
  children,
  onClose = () => { },
}: Props) => {
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={snapPoints}
      ref={bottomSheetModalRef}
      enablePanDownToClose={true}
      enableDynamicSizing={false}
      backgroundStyle={backgroundStyle}
    >
      <BottomSheetView style={[ModalStyles.modalContainer, modalContainerStyle]}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
};

const ModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
});

export default Modal