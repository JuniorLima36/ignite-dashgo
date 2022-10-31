import {Flex, Box, Text, Avatar} from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
    return(
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Junior Lima</Text>
                    <Text color='gray.300' fontSize='small'>
                        contato.juniorlima36@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size='md' name='Junior Lima' src='https://github.com/juniorlima36.png' />
        </Flex>
    );
}