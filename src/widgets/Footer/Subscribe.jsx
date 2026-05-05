import { Button } from '@/shared/ui/Button/Button.jsx';
import { Input } from '@/shared/ui/Input/Input.jsx';

export const Subscribe = () => {
  return (
    <div className="footer__subscribe">
      <h3 className={'footer__title'}>Подписка</h3>
      <p className={'footer__text'}>
        Будьте в курсе событий
      </p>
      <form className={'footer__form'}>
         <Input className={'footer__input'}  placeholder={'e-mail'} />
        <Button
          className={'footer__button'}
          type="submit"
          size={'md'}
          variant={'ghost'}
          font={'regular'}
        >
          ОТПРАВИТЬ
        </Button>
      </form>
      
    </div>
  );
};
