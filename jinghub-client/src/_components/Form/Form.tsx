import React, { useCallback, useRef, useState } from 'react';
import * as css from './Form.css';

type FormProps = {
  
};

export const Form: React.FC<FormProps> = ({}) => {
  const uploadButtonEl = useRef<HTMLInputElement>(null);

  const onClickUploadButton = useCallback(() => {
    uploadButtonEl.current && uploadButtonEl.current.click();
  }, []);

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
      <input type="file" multiple name="images" ref={uploadButtonEl} className={css.file}/>
      <button className={css.button} onClick={onClickUploadButton}>인증샷 업로드</button>
      <div>

      </div>
      <button className={css.button}>
        제출하기
      </button>
    </form>
  );
};