import { css } from '@emotion/react';
import palette, { PaletteViewType } from '../lib/styles/palette';

interface paletteViewProps {}

/**
 * - 이 컴포넌트들이 지원하는 색상의 종류입니다.
 */
function paletteView(props: paletteViewProps) {
  const paletteView = palette as PaletteViewType;
  return (
    <div css={block}>
      <div css={swatchItemWrapper}>
        <h3>white</h3>
        <div css={swatchItem}>
          <div
            css={swatch(paletteView.white)}
            style={{ border: '1px solid black' }}
          />

          <p>{paletteView.white}</p>
        </div>
      </div>
      <div css={swatchItemWrapper}>
        <h3>black</h3>
        <div css={swatchItem}>
          <div css={swatch(paletteView.black)} />
          <p>{paletteView.black}</p>
        </div>
      </div>
      <div css={swatchItemWrapper}>
        <h3>gray</h3>
        {Object.keys(paletteView.gray).map((v, i) => (
          <div css={swatchItem} key={`gray_${i}`}>
            <div css={swatch(paletteView.gray[parseInt(v, 10)])} />
            <p>{paletteView.gray[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>red</h3>
        {Object.keys(paletteView.red).map((v, i) => (
          <div css={swatchItem} key={`red_${i}`}>
            <div css={swatch(paletteView.red[parseInt(v, 10)])} />
            <p>{paletteView.red[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>pink</h3>
        {Object.keys(paletteView.pink).map((v, i) => (
          <div css={swatchItem} key={`pink_${i}`}>
            <div css={swatch(paletteView.pink[parseInt(v, 10)])} />
            <p>{paletteView.pink[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>grape</h3>
        {Object.keys(paletteView.grape).map((v, i) => (
          <div css={swatchItem} key={`grape_${i}`}>
            <div css={swatch(paletteView.grape[parseInt(v, 10)])} />
            <p>{paletteView.grape[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>violet</h3>
        {Object.keys(paletteView.violet).map((v, i) => (
          <div css={swatchItem} key={`violet_${i}`}>
            <div css={swatch(paletteView.violet[parseInt(v, 10)])} />
            <p>{paletteView.violet[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>indigo</h3>
        {Object.keys(paletteView.indigo).map((v, i) => (
          <div css={swatchItem} key={`indigo_${i}`}>
            <div css={swatch(paletteView.indigo[parseInt(v, 10)])} />
            <p>{paletteView.indigo[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>blue</h3>
        {Object.keys(paletteView.blue).map((v, i) => (
          <div css={swatchItem} key={`blue_${i}`}>
            <div css={swatch(paletteView.blue[parseInt(v, 10)])} />
            <p>{paletteView.blue[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>cyan</h3>
        {Object.keys(paletteView.cyan).map((v, i) => (
          <div css={swatchItem} key={`cyan_${i}`}>
            <div css={swatch(paletteView.cyan[parseInt(v, 10)])} />
            <p>{paletteView.cyan[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>teal</h3>
        {Object.keys(paletteView.teal).map((v, i) => (
          <div css={swatchItem} key={`teal_${i}`}>
            <div css={swatch(paletteView.teal[parseInt(v, 10)])} />
            <p>{paletteView.teal[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>green</h3>
        {Object.keys(paletteView.green).map((v, i) => (
          <div css={swatchItem} key={`green_${i}`}>
            <div css={swatch(paletteView.green[parseInt(v, 10)])} />
            <p>{paletteView.green[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>lime</h3>
        {Object.keys(paletteView.lime).map((v, i) => (
          <div css={swatchItem} key={`lime_${i}`}>
            <div css={swatch(paletteView.lime[parseInt(v, 10)])} />
            <p>{paletteView.lime[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>yellow</h3>
        {Object.keys(paletteView.yellow).map((v, i) => (
          <div css={swatchItem} key={`yellow_${i}`}>
            <div css={swatch(paletteView.yellow[parseInt(v, 10)])} />
            <p>{paletteView.yellow[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
      <div css={swatchItemWrapper}>
        <h3>orange</h3>
        {Object.keys(paletteView.orange).map((v, i) => (
          <div css={swatchItem} key={`orange_${i}`}>
            <div css={swatch(paletteView.orange[parseInt(v, 10)])} />
            <p>{paletteView.orange[parseInt(v, 10)]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const block = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const swatchItemWrapper = css`
  display: flex;
  flex-flow: row wrap;
  h3 {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const swatchItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
`;

const swatch = (background: string) => css`
  height: 4.2rem;
  width: 4.2rem;
  background: ${background};
  box-sizing: border-box;
  border-radius: 5px;
`;

export default paletteView;
