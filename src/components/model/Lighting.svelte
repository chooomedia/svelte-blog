<script>
	import { T } from '@threlte/core';
</script>

<!-- Beleuchtung für die Cannabis-Pflanze -->
<T.AmbientLight intensity={0.8} />
<T.DirectionalLight position={[5, 10, 5]} intensity={1.2} />
<T.PointLight position={[-3, 1, -2]} intensity={0.5} color="#4ade80" />
<T.HemisphereLight args={['#ffffff', '#222222']} intensity={0.7} />
