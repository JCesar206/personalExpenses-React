export default {
	testEnviroment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTest.js'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	}
};