import React, { useCallback, useRef, useState } from 'react';
import * as css from './Form.css';
import { ImagePreviewer } from '../ImagePreviewer/ImagePreviewer';

type FormProps = {
  
};

export const Form: React.FC<FormProps> = ({}) => {
  const fileInputEl = useRef<HTMLInputElement>(null);

  const onClickUploadButton = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if(!fileInputEl.current) return;
    fileInputEl.current.click();
  }, [fileInputEl.current]);

  return (
    <form className={css.root}>
      <div className={css.content}>
        <div className={css.container}>
          <input type="checkbox" name="content" value="shampoo" id="shampoo" className={css.checkbox}/>
          <span className={css.checkmark}></span>
          <label htmlFor="shampoo" className={css.label}>샴푸</label>
        </div>
        <div className={css.container}>
          <input type="checkbox" name="content" value="bodywash" id="bodywash" className={css.checkbox}/>
          <span className={css.checkmark}></span>
          <label htmlFor="bodywash" className={css.label}>바디워시</label>
        </div>
        <div className={css.container}>
          <input type="checkbox" name="content" value="linse" id="linse" className={css.checkbox}/>
          <span className={css.checkmark}></span>
          <label htmlFor="linse" className={css.label}>린스</label>
        </div>
        <div className={css.container}>
          <input type="checkbox" name="content" value="formcleanser" id="formcleanser" className={css.checkbox}/>
          <span className={css.checkmark}></span>
          <label htmlFor="formcleanser" className={css.label}>폼클렌징</label>
        </div>
        <div className={css.container}>
          <input type="checkbox" name="content" value="toothbrush" id="toothbrush" className={css.checkbox}/>
          <span className={css.checkmark}></span>
          <label htmlFor="toothbrush" className={css.label}>양치</label>
        </div>
      </div>
      <input type="file" name="images" ref={fileInputEl} className={css.file} />
      <ImagePreviewer inputRef={fileInputEl} />
      <button className={css.button} onClick={onClickUploadButton}>인증샷 업로드</button>
      <button className={css.button}>
        제출하기
      </button>
    </form>
  );
};