import { Map, MapMarker, ZoomControl, MapTypeControl } from 'react-kakao-maps-sdk';

type KakaoMapProps = {
  width?: string;
  level?: string;
  title?: string;
  firstContent?: string;
  secondContent?: string;
};

function KakaoMap({ width, level, title, firstContent, secondContent }: KakaoMapProps) {
  return (
    <div style={{ width: width ? width : '100%' }}>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 36.966125,
          lng: 127.517545,
        }}
        style={{
          width: '100%',
          height: '800px',
        }}
        level={level ? level : 5} // 지도의 확대 레벨
      >
        <MapTypeControl position={'TOPRIGHT'} />
        <ZoomControl position={'RIGHT'} />
        <MapMarker
          position={{
            lat: 36.966125,
            lng: 127.517545,
          }}
        >
          <div style={{ padding: '5px', color: '#000' }}>
            {title ? title : '나람사료'} <br />
            <a
              href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667"
              style={{ color: 'blue' }}
              target="_blank"
              rel="noreferrer"
            >
              {firstContent}
            </a>{' '}
            <a
              href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667"
              style={{ color: 'blue' }}
              target="_blank"
              rel="noreferrer"
            >
              {secondContent}
            </a>
          </div>
        </MapMarker>
      </Map>
    </div>
  );
}

export default KakaoMap;
