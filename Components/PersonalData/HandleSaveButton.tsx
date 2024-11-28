import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface HandleSaveButtonProps {
    onPress: () => void;
    isChanged: boolean;
}

const HandleSaveButton = ({ onPress, isChanged }: HandleSaveButtonProps) => {
    return (
        <TouchableOpacity
            className={`absolute bottom-6 w-11/12 h-16 items-center justify-center bg-[#87CEEB] rounded-full shadow-xl ${isChanged ? 'bg-[#87CEEB]' : 'bg-gray-400'}`}
            onPress={onPress}
            disabled={!isChanged}
        >
            <Text className='text-white text-lg' style={{ fontFamily: 'poppins-medium' }} >Salvar</Text>
        </TouchableOpacity>
    );
}

export default HandleSaveButton;