import {Stack} from '@chakra-ui/react';
import {RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine} from 'react-icons/ri';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function SidebarNav(){
    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title='GERAL'>
                <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
                <NavLink icon={RiContactsLine} href='/users'>Usuarios</NavLink>
            </NavSection>
            <NavSection title='AUTOMAÇÃO'>
                <NavLink icon={RiInputMethodLine} href='/forms'>Dashboard</NavLink>
                <NavLink icon={RiGitMergeLine} href='/automation'>Usuarios</NavLink>
            </NavSection>
        </Stack>
    );
}