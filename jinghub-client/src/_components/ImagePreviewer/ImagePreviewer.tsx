import React, { RefObject, useEffect, useState } from 'react';
import * as css from './ImagePreviewer.css';

type ImageCarouselProps = {
  inputRef: RefObject<HTMLInputElement>;
};

export const ImagePreviewer: React.FC<ImageCarouselProps> = React.memo(({ inputRef }) => {
  const fileReader = new FileReader();
  const [imageUrl, setImageUrl] = useState<any>('');

  const onChangeFileInput = () => {
    if(!inputRef.current || !inputRef.current.files) return;
    fileReader.readAsDataURL(inputRef.current.files[0]);
    fileReader.onload = (e: ProgressEvent<EventTarget>) => {
      setImageUrl((e.target as any).result);
    }
  }

  useEffect(() => {
    if(!inputRef.current || !inputRef.current.files) return;
    inputRef.current.addEventListener('change', onChangeFileInput);
    return () => {
      inputRef.current?.removeEventListener('change', onChangeFileInput);
    }
  }, [inputRef.current])
  return (
    <div className={css.root}>
      {imageUrl && <img src={imageUrl} className={css.image}/>}
    </div>
  );
});