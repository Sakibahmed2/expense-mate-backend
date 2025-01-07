const sendResponse = (res, data) => {
  res.status(data?.statusCode || 200).json({
    success: data?.success || true,
    message: data?.message,
    data: data?.data,
  });
};

export default sendResponse;
