## Primitives(기본 요소)

 - CesiumJS에서 Primitives(기본 요소)는 3D 공간에 그려지는 기본적인 그래픽 요소를 나타내는 객체입니다. Primitives는 지오메트리와 그에 따른 머티리얼로 구성되어 있으며, 지구의 표면 위나 공간 내에서 시각적인 표현을 제공합니다.

 - CesiumJS의 Primitives에는 다양한 유형이 있으며, 각각 다른 목적과 시각적인 특성을 가지고 있습니다. 몇 가지 주요한 Primitives의 예시는 다음과 같습니다:

 - 3D 모델 (Model): 외부 파일 형식인 glTF 또는 COLLADA(DAE)를 로드하여 3D 모델을 표현합니다. 모델의 지오메트리와 텍스처를 렌더링할 수 있습니다.

 - 지오메트리 (Geometry): 기하학적 모양을 그리는 기본 Primitives입니다. 예를 들어, 평면 (Plane), 박스 (Box), 구 (Sphere), 원기둥 (Cylinder) 등의 다양한 형태의 지오메트리 Primitives를 사용할 수 있습니다.

 - 포인트 (Point): 3D 공간에서 점을 표현하는 Primitives입니다. 점의 크기, 색상, 심벌 등을 지정할 수 있습니다. 지리적 데이터 포인트를 시각화할 때 유용합니다.

 - 라인 (Polyline): 점들의 연결을 통해 선을 그리는 Primitives입니다. 다양한 스타일과 두께, 색상 등을 설정할 수 있습니다. 도로, 경로 등의 표현에 사용될 수 있습니다.

 - 폴리곤 (Polygon): 다각형을 그리는 Primitives입니다. 내부 영역을 채우거나 테두리만 그릴 수 있으며, 색상, 투명도, 텍스처 등을 설정할 수 있습니다. 행정 구역, 건물 등의 표현에 유용합니다.

 - 이 외에도 CesiumJS에는 다양한 Primitives가 있으며, 개발자는 이들을 조합하여 복잡한 3D 시각화를 구축할 수 있습니다. Primitives를 사용하면 CesiumJS에서 다양한 유형의 그래픽 요소를 생성하고 조작할 수 있습니다.