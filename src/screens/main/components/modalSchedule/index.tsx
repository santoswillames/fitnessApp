import React, { useCallback, useRef } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export function ModalSchedule() {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      
    <>
        <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
        />
        
        <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
        >
            <BottomSheetView  className='flex-1 px-6 bg-[#FCF9FB]'>
                <Text className='font-montserrat-semibold text-center text-[20px] text-[#262135] mb-4'>Your Schedule</Text>
            </BottomSheetView>
        </BottomSheetModal>
    </>
  );
};


