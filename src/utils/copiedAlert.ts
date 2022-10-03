import toast from 'react-hot-toast';

export const copiedAlert = ():string => toast('Copied Styles', { position: 'top-right' });

export const changeTheme = ():void => {
    const html = document.querySelector('html');
    if(!html?.classList.contains('dark')) {
        html?.classList.toggle('dark');
    } else {
        html?.classList.toggle('dark');
    }
}