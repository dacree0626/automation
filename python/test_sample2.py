import pytest
@pytest.mark.set1
def test_file2_method1():
	x=5
	y=6
	assert x+1 == y,"test failed"

@pytest.mark.set1
def test_file2_method2():
	x=5
	y=6
	assert x+1 == y,"test failed"