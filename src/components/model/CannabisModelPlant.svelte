<script>
	import { T } from '@threlte/core';

	// Exportiere Props für flexible Anpassung
	export let scale = 22;
	export let position = [0, 22, 0];
	export let rotation = [0, Math.PI / 2, 0]; // 90° drehen für Seitenansicht
</script>

<T.Group {scale} {position} {rotation} dispose={false}>
	<!-- Einfacher Cannabis-Pflanzenstamm -->
	<T.Mesh position={[0, 1, 0]}>
		<T.CylinderGeometry args={[0.05, 0.08, 2, 8]} />
		<T.MeshStandardMaterial color="#5D4037" roughness={0.8} />
	</T.Mesh>

	<!-- Blätter unten -->
	<T.Group position={[0, 0.3, 0]}>
		<!-- Blatt 1 -->
		<T.Mesh position={[0.3, 0, 0]} rotation={[0, 0, -0.2]}>
			<T.ConeGeometry args={[0.2, 0.5, 5, 1]} />
			<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
		</T.Mesh>

		<!-- Blatt 2 -->
		<T.Mesh position={[-0.3, 0, 0]} rotation={[0, 0, 0.2]}>
			<T.ConeGeometry args={[0.2, 0.5, 5, 1]} />
			<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
		</T.Mesh>

		<!-- Blatt 3 -->
		<T.Mesh position={[0, 0, 0.3]} rotation={[0.2, 0, 0]}>
			<T.ConeGeometry args={[0.2, 0.5, 5, 1]} />
			<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
		</T.Mesh>

		<!-- Blatt 4 -->
		<T.Mesh position={[0, 0, -0.3]} rotation={[-0.2, 0, 0]}>
			<T.ConeGeometry args={[0.2, 0.5, 5, 1]} />
			<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
		</T.Mesh>
	</T.Group>

	<!-- Blätter mitte -->
	<T.Group position={[0, 0.8, 0]}>
		<!-- Blatt 1 -->
		<T.Mesh position={[0.4, 0, 0]} rotation={[0, 0, -0.3]}>
			<T.ConeGeometry args={[0.2, 0.6, 5, 1]} />
			<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
		</T.Mesh>

		<!-- Blatt 2 -->
		<T.Mesh position={[-0.4, 0, 0]} rotation={[0, 0, 0.3]}>
			<T.ConeGeometry args={[0.2, 0.6, 5, 1]} />
			<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
		</T.Mesh>

		<!-- Blatt 3 -->
		<T.Mesh position={[0, 0, 0.4]} rotation={[0.3, 0, 0]}>
			<T.ConeGeometry args={[0.2, 0.6, 5, 1]} />
			<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
		</T.Mesh>

		<!-- Blatt 4 -->
		<T.Mesh position={[0, 0, -0.4]} rotation={[-0.3, 0, 0]}>
			<T.ConeGeometry args={[0.2, 0.6, 5, 1]} />
			<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
		</T.Mesh>
	</T.Group>

	<!-- Blüten/Knospen oben -->
	<T.Group position={[0, 1.5, 0]}>
		<!-- Hauptknospe -->
		<T.Mesh position={[0, 0.2, 0]}>
			<T.SphereGeometry args={[0.25, 16, 16]} />
			<T.MeshStandardMaterial color="#558B2F" roughness={0.6} metalness={0.2} />
		</T.Mesh>

		<!-- Kleinere Knospen -->
		<T.Mesh position={[0.2, 0, 0]}>
			<T.SphereGeometry args={[0.15, 16, 16]} />
			<T.MeshStandardMaterial color="#558B2F" roughness={0.6} metalness={0.2} />
		</T.Mesh>

		<T.Mesh position={[-0.2, 0, 0]}>
			<T.SphereGeometry args={[0.15, 16, 16]} />
			<T.MeshStandardMaterial color="#558B2F" roughness={0.6} metalness={0.2} />
		</T.Mesh>

		<T.Mesh position={[0, 0, 0.2]}>
			<T.SphereGeometry args={[0.15, 16, 16]} />
			<T.MeshStandardMaterial color="#558B2F" roughness={0.6} metalness={0.2} />
		</T.Mesh>

		<T.Mesh position={[0, 0, -0.2]}>
			<T.SphereGeometry args={[0.15, 16, 16]} />
			<T.MeshStandardMaterial color="#558B2F" roughness={0.6} metalness={0.2} />
		</T.Mesh>

		<!-- Kleine Blätter an der Spitze -->
		<T.Group position={[0, 0.4, 0]}>
			<T.Mesh position={[0.15, 0, 0]} rotation={[0, 0, -0.4]} scale={[1, 0.7, 1]}>
				<T.ConeGeometry args={[0.1, 0.3, 5, 1]} />
				<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
			</T.Mesh>

			<T.Mesh position={[-0.15, 0, 0]} rotation={[0, 0, 0.4]} scale={[1, 0.7, 1]}>
				<T.ConeGeometry args={[0.1, 0.3, 5, 1]} />
				<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
			</T.Mesh>

			<T.Mesh position={[0, 0, 0.15]} rotation={[0.4, 0, 0]} scale={[1, 0.7, 1]}>
				<T.ConeGeometry args={[0.1, 0.3, 5, 1]} />
				<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
			</T.Mesh>

			<T.Mesh position={[0, 0, -0.15]} rotation={[-0.4, 0, 0]} scale={[1, 0.7, 1]}>
				<T.ConeGeometry args={[0.1, 0.3, 5, 1]} />
				<T.MeshStandardMaterial color="#43A047" roughness={0.7} metalness={0.1} />
			</T.Mesh>
		</T.Group>
	</T.Group>
</T.Group>
