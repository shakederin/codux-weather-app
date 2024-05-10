import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => (
        <Navbar
            navigateToSearch={function (): void {
                throw new Error('Function not implemented.');
            }}
            navigateToHome={function (): void {
                throw new Error('Function not implemented.');
            }}
            navigateToForecast={function (): void {
                throw new Error('Function not implemented.');
            }}
            selected={1}
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 430,
        canvasHeight: 932,
        canvasBackgroundColor: '#ffffff',
    },
});
